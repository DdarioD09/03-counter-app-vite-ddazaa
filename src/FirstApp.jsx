import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

  return (
    <>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      {/* <h2>{getGreting('Dario')}</h2> */}
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: "Dario Daza",
  subTitle: "There is no subtitle",
  title: "There is no title",
}