var a = 3;
var obj = {
    a: 4,
  fn1: function(){
      return this.a;
  },
  fn2: () => {
      return this.a;
  }
}
var obj2 = {
    a: 5
}
obj.fn1()
obj.fn2()
obj.fn1.call(obj2)
obj.fn2.call(obj2)