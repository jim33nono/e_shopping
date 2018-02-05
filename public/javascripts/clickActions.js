function addCourse(){
    window.location.href = '/employee/add';
}

function cancelAdd(){
    window.location.href = '/displayEmployees';
}


function editBtn(id) {
  window.location.href="/employee/edit/" + id;
}
