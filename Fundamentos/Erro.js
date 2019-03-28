function tratarErro(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (error) {
        throw new Error("...")
    } finally {
        console.log("final")
    }
}

const obj = { nome: "Rutemberg" }
tratarErro(obj)