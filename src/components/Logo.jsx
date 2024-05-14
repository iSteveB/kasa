import React from 'react';

const Logo = ({ size, color }) => {
	return (
		<>
			{size === 'large' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='211'
					height='68'
					fill='none'
					viewBox='0 0 211 68'>
					<path
						fill={color}
						d='M20.575 34.648L9.34 46.136v16.12H.5V0h8.84v34.834L42.86 0h10.13L26.651 27.978 54.83 62.256H44.517L20.573 34.648zM119.289 57.253l3.5-6.67c4.051 2.78 10.313 4.818 16.391 4.818 7.919 0 11.05-2.41 11.05-6.486 0-10.56-29.652-1.482-29.652-20.196 0-8.523 7.551-14.081 19.522-14.081 6.078 0 13.076 1.667 17.128 4.261l-3.683 6.67c-4.236-2.779-8.84-3.705-13.445-3.705-7.366 0-11.05 2.779-11.05 6.485 0 11.117 29.652 2.038 29.652 20.381 0 8.523-7.736 13.897-20.259 13.897-7.551.185-15.286-2.224-19.154-5.374zM210.822 33.722v28.534h-8.104v-6.3c-2.762 4.262-8.103 6.67-15.47 6.67-10.682 0-17.312-5.743-17.312-13.896 0-7.596 4.788-13.71 18.785-13.71h13.445V33.35c0-7.226-4.236-11.302-12.524-11.302-5.525 0-11.234 2.038-14.918 5.003l-3.499-6.485c4.789-3.891 11.787-6.115 19.338-6.115 13.076.186 20.259 6.485 20.259 19.27zm-8.472 14.082v-6.67h-13.076c-8.472 0-10.866 3.335-10.866 7.226 0 4.632 3.867 7.596 10.313 7.596 6.446.186 11.603-2.594 13.629-8.152zM92.032 49.842v12.6l5.341-3.15v-12.6l-5.34 3.15z'></path>
					<path
						fill={color}
						d='M106.766 34.463L84.85 21.678l-12.156-7.04-11.97 20.937.184 19.64L82.64 68l2.21-1.297V48.174l9.76-17.231 9.946 5.744v18.528l2.21-1.297V34.463z'></path>
				</svg>
			)}

      {size === 'small' && (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="122"
        height="40"
        fill="none"
        viewBox="0 0 122 40"
      >
        <path
          fill={color}
          d="M11.645 20.098l-6.517 6.664v9.35H0V0h5.128v20.206L24.57 0h5.876L15.17 16.23l16.345 19.882h-5.983L11.645 20.098zM68.905 33.21l2.03-3.869c2.35 1.613 5.983 2.795 9.508 2.795 4.594 0 6.41-1.397 6.41-3.762 0-6.126-17.2-.86-17.2-11.715 0-4.944 4.38-8.168 11.324-8.168 3.526 0 7.585.967 9.935 2.472l-2.136 3.869c-2.457-1.612-5.128-2.15-7.799-2.15-4.273 0-6.41 1.613-6.41 3.762 0 6.449 17.2 1.182 17.2 11.823 0 4.944-4.487 8.06-11.751 8.06-4.38.108-8.867-1.29-11.11-3.116zM122 19.56v16.552h-4.701v-3.654c-1.602 2.472-4.7 3.87-8.973 3.87-6.196 0-10.042-3.332-10.042-8.061 0-4.407 2.777-7.954 10.896-7.954h7.799v-.967c0-4.192-2.457-6.556-7.264-6.556-3.205 0-6.517 1.182-8.654 2.902l-2.03-3.762c2.778-2.257 6.838-3.547 11.218-3.547C117.834 8.491 122 12.145 122 19.561zm-4.914 8.17v-3.87h-7.585c-4.914 0-6.303 1.935-6.303 4.192 0 2.687 2.243 4.406 5.982 4.406 3.739.108 6.731-1.505 7.906-4.729zM53.095 28.912v7.308l3.098-1.827v-7.308l-3.098 1.827z"
        ></path>
        <path
          fill={color}
          d="M61.641 19.99l-12.713-7.415-7.05-4.084-6.944 12.145.106 11.392 12.606 7.416 1.282-.752V27.944l5.662-9.995 5.769 3.332v10.747l1.282-.752V19.991z"
        ></path>
      </svg>)}
		</>
	);
};

export default Logo;
