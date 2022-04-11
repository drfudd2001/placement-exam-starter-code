let yourName = "Elmer Figueroa-Garcia" 
let gb = 0
let cc = 0
let sugar = 0
document.getElementById('credit').textContent = `Created by ${yourName}`
document.addEventListener('DOMContentLoaded', function(){
    const gbAdd = document.querySelector('#add-gb');
    const gbSub = document.querySelector('#minus-gb');
    const ccAdd = document.querySelector('#add-cc');
    const ccSub = document.querySelector('#minus-cc');
    const sugarAdd = document.querySelector('#add-sugar');
    const sugarSub = document.querySelector('#minus-sugar');
    const gbDisp = document.querySelector('#qty-gb');
    const ccDisp = document.querySelector('#qty-cc');
    const sugarDisp = document.querySelector('#qty-sugar');
    const totalDisp = document.querySelector('#qty-total');
    function changeTotalCookies(){
        totalCookies = gb + cc + sugar;
        totalDisp.textContent = totalCookies;
    }
    gbAdd.addEventListener('click', function(){
        gb++;
        gbDisp.textContent = gb;
        changeTotalCookies();
    });
    gbSub.addEventListener('click', function(){
        if (gb > 0){
            gb--;
            gbDisp.textContent = gb;
            changeTotalCookies();
        }
    });
    ccAdd.addEventListener('click', function(){
        cc++;
        ccDisp.textContent = cc;
        changeTotalCookies();
    });
    ccSub.addEventListener('click', function(){
        if (cc > 0){
            cc--;
            ccDisp.textContent = cc;
            changeTotalCookies();
        }
    });
    sugarAdd.addEventListener('click', function(){
        sugar++;
        sugarDisp.textContent = sugar;
        changeTotalCookies();
    });
    sugarSub.addEventListener('click', function(){
        if (sugar > 0){
            sugar--;
            sugarDisp.textContent = sugar;
            changeTotalCookies();
        }
    });
})