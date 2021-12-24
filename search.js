// document.getElementById("table").style.display = "none";
const searchFun = () =>{

    let filter = document.getElementById('search').value.toUpperCase();

    let table = document.getElementById('table');

    let tr = table.getElementsByTagName('tr');

    for(var i = 0; i<tr.length; i++) {

        let  td = tr[i].getElementsByTagName('td')[0];

        if(td) {
            
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1) {
                
                tr[i].style.display = "all";

            }
            else {

                tr[i].style.display = "none";
            }
            
        }
    }

}
