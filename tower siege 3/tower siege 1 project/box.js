class Box extends BaseBox{

constructor(x,y){
  super(x,y,35,35);

}
display(){
  if (this.body.speed<3){
super.display()
  }
  else{
    World.remove(world,this.body)
    push()
    this.visibility=this.visibility-5
    tint(255,this.visibility)
    pop()
  }
}
}