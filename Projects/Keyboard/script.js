const insert = document.getElementById('insert')

window.addEventListener('keydown', (press) => {
    insert.innerHTML =
        `<div class='color'>
        <table>
            <tr>
                <th>key</th>
                <th>keyCode</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${press.key}</td>
                <td>${press.keyCode}</td>
                <td>${press.code}</td>
            </tr>
        </table
    </div>`;
});