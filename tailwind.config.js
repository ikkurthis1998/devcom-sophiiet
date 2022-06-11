const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				text: ["'Lato'", "sans-serif"],
				heading: ["'Roboto'", "sans-serif"],
				code: ["'Courier Prime'", "monospace"]
			},
			colors: {
				primary: {
					default: "#5065A8"
        },
        secondary: {
          default: "#F2EEE4"
        }
			}
		}
	},
	plugins: []
};
