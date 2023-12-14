
function SearchBrick() {
    var input, filter, table, tr, td, i, j, txtValue, test;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");

        for (j = 0; j < td.length; j++) {
            if (td[j]){
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1 && filter != ''){
                    //show the cell
                    td[j].classList.add("highlight")

                }else{
                    //hide again
                    td[j].classList.remove("highlight")
                }
            }
        }
    }
}