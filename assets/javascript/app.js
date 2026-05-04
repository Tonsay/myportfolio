// Tailwind Configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'purl-blue': '#C9DDF7',
                'purl-card': '#D8E8FC',
            },
            fontFamily: {
                'serif-purl': ['"DM Serif Display"', 'serif'],
                'sans': ['Inter', 'sans-serif'],
            }
        }
    }
}

        function hideAll() {
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
            });
        }

        function showPage(id) {
            hideAll();
            const target = document.getElementById(id);
            if (target) {
                target.classList.remove('hidden');
                window.scrollTo(0, 0); 
            }
        }