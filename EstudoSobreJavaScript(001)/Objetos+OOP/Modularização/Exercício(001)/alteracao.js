function txtMaiusculo(txt) {
    let txtModificado = []
    txtModificado = txt.map( (strg) => strg.toUpperCase() );
    return txtModificado;
}

export default {
    txtMaiusculo: txtMaiusculo
};