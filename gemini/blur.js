gemini.suite('blur text', (suite) => {
    suite.setUrl('/')
        .setCaptureElements('.home-logo')
        .capture('plain');
});