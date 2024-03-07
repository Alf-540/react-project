// src/components/Alert.jsx
import clsx from 'clsx';

import css from './Alert.module.css';

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ['alert', variant];

//   if (outlined) {
//     classNames.push('is-outlined');
//   }

//   if (elevated) {
//     classNames.push('is-elevated');
//   }

//   return <p className={classNames.join(' ')}>{children}</p>;
// };

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         'alert',
//         variant,
//         outlined && 'is-outlined',
//         elevated && 'is-elevated'
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// src/components/Alert.jsx

export const Alert = ({ css }) => {
  return (
    <p
      className={clsx('alert', css.variant, {
        'is-outlined': css.outlined,
        'is-elevated': css.elevated,
      })}
    >
      {css.children}
    </p>
  );
};
