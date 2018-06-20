---
layout: post
title: "block 种类和使用场景（ARC）"
tags: [iOS, block]
comments: true
---
   
&nbsp;&nbsp;&nbsp;根据Block在内存中的位置分为三种类型：NSGlobalBlock(全局)，NSStackBlock(栈区)，NSMallocBlock(堆区)。其中全局block位于常量区，程序无法操作，栈区由系统管理，运行后自动释放，堆区由程序管理释放


 ---
 
## 1、全局block形态
 
```c#
- (void)globalBlock {
    
    //__NSGlobalBlock__全局块
    void (^globalBlock)(void) = ^{
        
        NSLog(@"content");
    };
    NSLog(@"globalBlock: %@",globalBlock);
    self.block = globalBlock;
    NSLog(@"globalBlock copy: %@",self.block);
    globalBlock();
}

```


![1](http://ov2frenna.bkt.clouddn.com/blog/20180617131510.png)

ARC环境下不管全局有没有引用，都是 `__NSGlobalBlock__ `

---
 
## 2、栈区block形态

```c#
*第一种*
- (void)stackBlock {
    
    //此处__block表示int 在block内部自动copy一份，因为普通遍历在block是只读的
    __block int i=0;
    
    NSLog(@"stackBlock %@", ^{
        i = 100;
        NSLog(@"stack block here, i= %d", i);
    });
    
    (^{
        i = 100;
        NSLog(@"stack block here, i= %d", i);
    })();

    NSLog(@"outer stack i= %d",i);
}

*第二种*
- (void)saveFile:(NSDictionary *)dic complete:(void(^)(BOOL success))complete
{
    //dic写入本地近作demo使用，实际开发要判断路径是否存在，以及dic中是否存在null值等
    NSString    * path = [NSHomeDirectory() stringByAppendingFormat:@"/Caches/dicInfo"];
    BOOL suc = [dic writeToFile:path atomically:YES];

    if (complete) {
        //若complete中不引用外部变量suc，则complete是静态block，此处complete为栈block
        complete (suc);
    }
}

```
![2](http://ov2frenna.bkt.clouddn.com/blog/20180617132015.png?imageView2/0/q/100|watermark/2/text/SnVuY29XYW5n/font/5qW35L2T/fontsize/1000/fill/I0IzRjA5MA==/dissolve/55/gravity/SouthEast/dx/10/dy/44)
 
`__NSStackBlock__`一般作为函数的一个参数在函数内部调用。函数出栈时和其他变量或参数一起释放。

---

## 3、堆区block形态

```c#
- (void)headBlock {
    
    //__NSMallocBlock__
    void (^headBlock) (void) = ^ {
        NSLog(@"%@",self);
    };
    NSLog(@"headBlock: %@",headBlock);
    !headBlock ?: headBlock();
}
```
![](http://ov2frenna.bkt.clouddn.com/blog/20180617132502.png?imageView2/0/q/100|watermark/2/text/SnVuY29XYW5n/font/5qW35L2T/fontsize/1000/fill/I0IzRjA5MA==/dissolve/55/gravity/SouthEast/dx/10/dy/44)

----

## 4、__block修饰和static修饰的区别

`__block` 

    修饰基本类型变量或者对象，局部方法中的全局变量，自动将变量copy到堆上，浅拷贝对象地址，block内部会修改外部的值


`static`

    全局静态变量，主要用于修饰基本类型的变量，声明周期是整个程序运行
    
    
  --- 
  
## 5、Block中copy、retain、release操作总结
* SGlobalBlock：retain、copy、release操作都无效；

* NSStackBlock：retain、release操作无效，必须注意的是，NSStackBlock在函数返回后，Block内存将被回收。即使retain也没用。容易犯的错误是[[mutableAarry addObject:stackBlock]，（补：在ARC中不用担心此问题，因为ARC中会默认将实例化的block拷贝到堆上）在函数出栈后，从mutableAarry中取到的stackBlock已经被回收，变成了野指针。正确的做法是先将stackBlock copy到堆上，然后加入数组：[mutableAarry addObject:[[stackBlock copy] autorelease]]。支持copy，copy之后生成新的NSMallocBlock类型对象。

* NSMallocBlock：支持retain、release，虽然retainCount始终是1，但内存管理器中仍然会增加、减少计数。copy之后不会生成新的对象，只是增加了一次引用，类似retain；尽量不要对Block使用retain操作。 
       
    
