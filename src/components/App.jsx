import { Alert } from './Alert';
import css from './App.module.css';
export const App = () => {
  return (
    <>
      <Alert variant={css.info}>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant={css.error} outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant={css.success} elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant={css.warning} outlined elevated>
        Please update your profile contact information
      </Alert>
    </>
  );
};
