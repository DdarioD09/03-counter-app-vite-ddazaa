describe('Tests on <DemoComponent/>', () => {

    test('This test should not fail', () => {

        // Arrange
        const message1 = 'Hello World';

        // Act
        const message2 = message1.trim();
        console.log("🚀 ~ test ~ message2:\n\n", message2);

        // Assert
        expect(message1).toBe(message2);
    })
})