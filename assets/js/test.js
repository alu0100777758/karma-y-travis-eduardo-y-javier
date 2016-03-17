var expect = chai.expect;

describe("Conversor", function() {
  describe("Medida", function(done) {
    it("Cambio de f a c", function() {
      expect(Medida.convertir("32f to c")).to.equal("0.00 Celsius");
    });

    it("Prueba fallo", function() {
      expect(Medida.convertir("32")).to.equal("Introduzca una temperatura valida: 330e-1 F to C");
    });
    it("Prueba conversion no reconocida", function() {
      expect(Medida.convertir("32f to ")).to.equal('Desconozco como convertir desde "f" hasta "to"');
    });
  });
  describe("Temperatura", function() {
  it("Creacion de un objeto Fahrenheit", function() {
    var source = new Fahrenheit(32);
    expect(source.valor).to.equal(32);
  });
  it("Prueba de Fahrenheit a Celsius", function() {
    var source = new Fahrenheit(32);
    expect(source.toCelsius()).to.equal(0);
  });
  it("Prueba de Fahrenheit a Kelvin", function() {
    var source = new Fahrenheit(32);
    expect(source.toKelvin()).to.equal(273.15);
  });
  it("Creacion de un objeto Celsius", function() {
    var source = new Celsius(32);
    expect(source.valor).to.equal(32);
  });
  it("Prueba de Celsius a Fahrenheit", function() {
    var source = new Celsius(32);
    expect(source.toFahrenheit()).to.equal(89.6);
  });
  it("Prueba de Celsius a Kelvin", function() {
    var source = new Celsius(32);
    expect(source.toKelvin()).to.equal(305.15);
  });
  it("Creacion de un objeto Kelvin", function() {
    var source = new Kelvin(32);
    expect(source.valor).to.equal(32);
  });
  it("Prueba de Kelvin a Fahrenheit", function() {
    var source = new Kelvin(32);
    expect(source.toFahrenheit()).to.equal(-402.07);
  });
  it("Prueba de Kelvin a Celsius", function() {
    var source = new Kelvin(32);
    expect(source.toCelsius()).to.equal(-241);
  });
  });
});
