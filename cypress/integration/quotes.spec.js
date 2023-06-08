// write tests here
describe("Quotes App", () => {
beforeEach(() => {
    //Fresh state for every test
    //test shouldnt rely on other tests
    //tests work in isolation

    cy.visit("http://localhost:1234/");  // careful 
})


// Helpers ie Getters
const textInput = () => cy.get("input[name=text]");
const authorInput = () => cy.get("input [name=author]");
const foobarInput = () => cy.get("input[name=foorbar]");
const submitBtn = () => cy.get(`button[id="submitBtn"]`);
const cancelBtn = () => cy.get(`button[id="cancelBtn"]`);

it("sanity check to make sure the tests work", () => {
    // "it" is a test
    //"expect" is an assertion 
    // There can be multiple assertions per test but they all need to relate to the one thing that were testing

    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.equal(5); //strict === 
    expect({}).not.to.equal({}); 
    expect({}).to.eql({}); // double == parses thru object instead of tripple 
    //going by declaration (aka like person and person 2 which would =!)
})

// CI/CD => continuous integration / continuous delivery 

it("the propper elements are showing", () => {
    textInput().should("exist");
    authorInput().should("exist");
    foobarInput().should("not.exist");
    submitBtn().should("exist");
    cancelBtn().should("exist");

    cy.contains("Submit quote").should("exist")
    cy.contains(/submit quote/i).should("exist") //makes it so its not case sensitive
})

describe("Filling out the Inputs and Canceling", () => {
    it("can navigate to the site", () => {
        cy.url.should("include", "localhost");
    })

    it("submit button starts our disabled", () => {
        submitBtn().should("be.disabled");
    })

    it("can type in the inputs", () => {
        textInput().should("have.value", "").type("CSS rules")
        .should("have.value", "CSS rules");

        authorInput()
        .should("have.value", "")
        .type("CRHarding")
        .should("have.value", "CRHarding");
    })

it("the submit button enables when both inputs are filled out", () => {
    authorInput().type("Casey");
    textInput.type("This is fin!");
    submitBtn().should("not.be.disabled");
})

it("the cancel buttons can reset the inputs and disable the submit button", () => {
    authorInput().type("Casey");
    textInput().type("FUN");
    cancelBtn().click();
    textInput().should("have.value", "");
    authorInput().should("have.value", "");
    submitBtn().should("be.dsiabled");
})

describe("adding a new quote", () => {
    it("can submit and delete a new quote", () => {
        textInput().type("CSS rules");
        authorInput().type()
    })
})


})

// it("is a test", () => {
//     cy.contains("Submit quote").should("exist");
// })



})




/////////// 35 min mark stopped typing 