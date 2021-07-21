import logo from './logo.svg';
import './App.css';
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <Typography variant="h1" component="h2">
      {/* There is already an h1 in the page, let's not duplicate it. */}
      h1. Heading
    </Typography>
  );
}

export default App;
