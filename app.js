function table() {
    let board ="<table border='1'style='border-collapse: collapse' width='100%'>";
    for (let row=1; row<10;row++){
        board+="<tr>";
        for (let column=1;column<10;column++){
            board+="<td>"+column+"X"+row+"="+row*column+"</td>";
        }
        board+="</tr>";
    }
    board+="</table>";
    document.write(board);
}