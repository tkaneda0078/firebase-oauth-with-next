import App from '../components/App'
import withAuth from '../helpers/withAuth'

class About {
  render() {
    return (
      <App>
        <p>About Page</p>
      </App>
    )
  }
}

export default withAuth(About)