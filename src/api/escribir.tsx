export default function Escribir(url: string, jsonPart: any) {
    console.log(jsonPart);
    const metodo = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonPart)
    };
    fetch(url, metodo).then(response => response.text()).then(console.log);
}