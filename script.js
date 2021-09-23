var selectedRow=null;
function onFormSubmit()
{
    event.preventDefault();
    var formData=readFormData();
    if(selectedRow===null){
        insertRecord(formData);
    }
    else{
        UpdateREcord(formData);
        resetForm(formData);
    }


}
// retrieve the data
function readFormData(){
    var formData={};
    formData["productCode"]=document.getElementById("productCode").value;
    formData["qty"]=document.getElementById("qty").value;
    formData["productName"]=document.getElementById("productName").value;
    formData["price"]=document.getElementById("price").value;

    return formData;
}

  /// insert the data

function insertRecord(data)
{
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    var    cell1=newRow.insertCell(0);
        cell1.innerHTML=data.productCode
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.productName
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.price
    var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.qty;
    var cell5=newRow.insertCell(4)
        cell5.innerHTML=`<button onclick='onDelete(this)'>Delete</button>,<button onclick='onEdit(this)'>Edit</button>`

}  

/// edit the function
function onEdit(td)

{
    if (confirm('do you want to edit'))
    {
        selectedRow=td.parentelement.parentelement;
        document.getElementsById('productCode').value=selectedRow.cells[0].innerHTML;
        document.getElementsById('price').value=selectedRow.cells[1].innerHTML;
        document.getElementsById('qty').value=selectedRow.cells[2].innerHTML;
        document.getElementsById('productName').value=selectedRow.cells[3].innerHTML;
    }    
}
function UpdateRecord(formData)
{
    selectedRow.cells[0].innerHTML=formData.productCode;
    selectedRow.cells[1].innerHTML=formData.productName;
    selectedRow.cells[2].innerHTML=formData.qty;
    selectedRow.cells[3].innerHTML=formData.price;

}


/// delete the record
function onDelete(td)
{
    if (confirm('do you want to delete')){
        row=td.parentElement.parentElement;
        document.getElementsById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

// reset the data
function resetForm()
{
    document.getElementsById('productCode').value=' ';
    document.getElementsById('productName').value=' ';
    document.getElementsById('qty').value=' ';
    document.getElementsById('price').value=' ';


}
