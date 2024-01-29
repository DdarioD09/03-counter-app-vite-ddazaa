const { render, screen } = require("@testing-library/react")
import { FirstApp } from '../src/FirstApp'

describe('Tests in <FirstApp />', () => {

    const title = 'Hello, how are you';
    const subTitle = 'This is a test subtitle';

    test('should match with the snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    });

    test('should show the message "Hello, how are you"', () => {
        render(<FirstApp title={title} />);
        expect(screen.getAllByText(title)).toBeTruthy();
        // screen.debug();
    });

    test('should show the title in a h1 tag', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('should show the subtitle sended by props', () => {
        render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );
        expect(screen.getAllByText(subTitle).length).toBe(2);

    })
});