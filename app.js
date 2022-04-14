
// Get elements

const acc_header = document.querySelectorAll('.accrodion-header');


// acc_header.forEach(item => {
    
//     item.addEventListener('click', function(){
//         acc_header.forEach(item =>{
//         if (item != this) {
//             item.classList.remove('active');
//             item.nextElementSibling.style.height = '0px';
//         }

//         });
//        item.classList.toggle('active');

//        if(item.classList.contains('active')){
//        item.nextElementSibling.style.height =  item.nextElementSibling.scrollHeight +'px';
//        }else{
//       item.nextElementSibling.style.height = '0px';
//        }

//     })
// });

acc_header.forEach(items =>{

    items.addEventListener('click', function(){

        acc_header.forEach(items => {

            if (items != this) {
                
                items.classList.remove('active');
                items.nextElementSibling.style.height ='0px';
            }
        })

        items.classList.toggle('active');

        if (items.classList.contains('active')) {

            items.nextElementSibling.style.height = items.nextElementSibling.scrollHeight +'px' 
        }else{
            items.nextElementSibling.style.height = '0px';
        }

    });

});