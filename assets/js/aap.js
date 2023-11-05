var Password=prompt("Enter Administrator Password")
// confirm("R You Sure")
if(Password=="admin"){
    document.write(`<h1 class="text-center success"> Logged in</h1>`)
}
else{
    document.write('<h1 class="text-center fail">Login failed</h1>')
    console.log('fail')
}
