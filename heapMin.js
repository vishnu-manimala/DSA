class Heap{
    constructor(){
        this.arr = []
    }
    left(i){
        return 2*i +1;
    }
    right(i){
        return 2*i +2;
    }
    parent(i){
        return Math.floor((i-1)/2)
    }
    getMin(){
        return this.arr[0];
    }
    insert(k){
        let arr = this.arr;
        arr.push(k);
        let i =arr.length-1;
        while(i>0 && arr[this.parent(i)]>arr[i]){
            let p = this.parent(i);
            [arr[i],arr[p]] = [arr[p],arr[i]];
            i = p;
        }
    }
    decreaseKey(i, newVal){
        let arr = this.arr;
        arr[i]= newVal;
        while(i && arr[this.parent(i)]>arr[i]){
            let p =this.parent(i);
            [arr[i],arr[p]] = [arr[p], arr[i]];
            i=p;
        }
    }
    MinHEapify(i){
        let arr = this.arr;
        let n = arr.length;
        if(n===1){
            return;
        }
        let l = this.left(i);
        let r = this.right(i);
        let smallest = i;
        if(l<n && arr[l]<arr[i]){
            smallest = l;
        }
        if(r<n && arr[r] < arr[i]){
            smallest = r;
        }
        if(smallest !== i){
            [arr[i],arr[smallest]] = [arr[smallest],arr[i]];
            this.MinHEapify(smallest);
        }
    }
    extractMin(){
        let arr = this.arr;
        if(arr.length === 1){
            return arr.pop();
        }
        let res = arr[0];
        arr[0] = arr[arr.length-1];
        arr.pop();
        this.MinHEapify(0);
        return res;
    }
    deleteKey(i)
    {
        this.decreaseKey(i, this.arr[0] - 1);
        this.extractMin();
    }
}

let h = new Heap();
    h.insert(3);
    h.insert(2);
    h.deleteKey(1);
    h.insert(15);
    h.insert(5);
    h.insert(4);
    h.insert(45);
     
    console.log(h.extractMin() + " ");
    console.log(h.getMin() + " ");
     
    h.decreaseKey(2, 1);
    console.log(h.extractMin());