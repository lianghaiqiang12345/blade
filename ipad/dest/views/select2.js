define(["View",getViewTemplatePath("select2"),"UISelect"],function(a,b,c){return _.inherit(a,{onCreate:function(){this.$el.html(b)},events:{"focus .chooseDate":"chooseDateAction","click .sconfirm":"confirmAction","click .scancel":"cancelAction"},cancelAction:function(){this.$(".date-widget").addClass("back").removeClass("move")},confirmAction:function(){this.$(".date-widget").addClass("back").removeClass("move"),this.$(".chooseDate").val(this.demo1.getSelected().name+this.demo2.getSelected().name+this.demo3.getSelected().name)},chooseDateAction:function(){if(!this.demo1||!this.demo2||!this.demo3){for(var a={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31},b=[],d=[],e=[],f=this,g=2e3;2014>=g;g++){var h={id:"y_"+g,name:g+"年"};b.push(h)}for(var g=1;12>=g;g++){var h={id:"m_"+g,name:g+"月"};d.push(h)}for(var g=1;31>=g;g++){var h={id:"d_"+g,name:g+"日"};e.push(h)}this.demo1=new c({wrapper:this.$(".row1"),datamodel:{data:b},changed:function(a){this.item=a}}),this.demo2=new c({wrapper:this.$(".row2"),datamodel:{data:d},changed:function(b){for(var c=parseInt(b.name),d=a[c],e=31;e>28;e--)f.demo3.datamodel.data[e-1].disabled=!1,e>d&&(f.demo3.datamodel.data[e-1].disabled=!0);f.demo3.reload()}}),this.demo3=new c({wrapper:this.$(".row3"),datamodel:{data:e}})}this.demo1.show(),this.demo2.show(),this.demo3.show(),this.$(".date-widget").addClass("move").removeClass("back")},onPreShow:function(){this.turning()},onShow:function(){},onHide:function(){}})});