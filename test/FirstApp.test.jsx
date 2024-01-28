const { render } = require("@testing-library/react")
import { FirstApp } from '../src/FirstApp'

describe('Tests in <FirstApp />', () => {

    // test('should match with the snapshot ', () => {
    //     const title = 'Hello, how are you'
    //     const { container } = render(<FirstApp title={title} />)

    //     expect(container).toMatchSnapshot();

    // });

    test('should show the title in a h1 tag', () => {
        const title = 'Hello, how are you'
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toContain(title);

    })

    test('should show the subtitle sended by props', () => {
        const title = 'Hello, how are you'
        const subTitle = 'This is a test subtitle'
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        )
        expect(getAllByText(subTitle).length).toBe(2);
    })
})