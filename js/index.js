var goods = [
    {
        'id':'A101',
        'goodsImg':'images/goods-001.jpg',
        'goodsTitle':'XAX钓鱼桶eva加厚鱼桶多功能活鱼桶折叠水桶鱼护桶钓箱装鱼桶鱼具',
        'goodsSpecifications':'蓝色45CM有提手',
        'goodsOriginal':'60',
        'goodsPrice':'35',
        'goodsNum':'1'
    },
    {
        'id':'A102',
        'goodsImg':'images/goods-002.jpg',
        'goodsTitle':'啃鱼埃米浮漂近视加粗醒目扁尾钓鱼用品鱼漂鲫鱼综合浮标渔漂渔具',
        'goodsSpecifications':'立式浮漂',
        'goodsOriginal':'35',
        'goodsPrice':'15',
        'goodsNum':'1'
    },
    {
        'id':'A103',
        'goodsImg':'images/goods-003.jpg',
        'goodsTitle':'钓椅新款钓鱼椅多功能折叠钓鱼椅垂钓椅台钓椅钓鱼凳渔具钓鱼用品',
        'goodsSpecifications':'标准套餐',
        'goodsOriginal':'200',
        'goodsPrice':'100',
        'goodsNum':'1'
    }
];
var vm = new Vue({
    el:'#buycar',
    data:{
        goods:goods,
        checkname:[],
        total :0,
        allcount:0
    },
    computed:{
        total:function(){
            var temptotal = 0;
            for (var i=0 ; i<this.checkname.length; i++){
                temptotal = temptotal + parseInt(goods[this.checkname[i]].goodsPrice * goods[this.checkname[i]].goodsNum)
            }
            return temptotal;
        },
        allcount:function(){
            var tempallcount = 0;
            for (var i=0 ; i<this.checkname.length; i++){
                tempallcount = tempallcount + parseInt(goods[this.checkname[i]].goodsNum)
            }
            return tempallcount;
        }
    },
    methods:{
        add:function($index){
            goods[$index].goodsNum ++
        },
        minus:function($index){
            if (goods[$index].goodsNum > 0){
                goods[$index].goodsNum --
            }
        },
        del:function($index){
            this.$emit('del',$index)
        },
        cleanAll:function(){
            goods.splice(0,goods.length);
        },
        selectAll:function(){
            this.checkname = [];
            if (document.getElementById('allselect').checked){
                for (var i=0; i<goods.length ; i++){
                    this.checkname.push(String(i))
                }
            }else{
                this.checkname = []
            }
        },
        delall:function(){
            for (var i=0; i <this.checkname.length; i++){
                this.$emit('del',this.checkname[i])
            }
            this.$emit('cleanCheckname')
        }
    },
    events:{
        del:function($index){
            goods.splice($index,1);
            this.$emit('cleanCheckname')
        },
        cleanCheckname:function(){
            this.checkname = []
        }
    }
});