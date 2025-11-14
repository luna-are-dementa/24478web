const sponsorData = {
    'pirelli': {
        name: 'Pirelli',
        bio: 'Pirelli is a multinational company specializing in tyres and associated services. They are known for their innovative tire technology and are the exclusive tire supplier for Formula 1. Pirelli supports our robotics team by providing materials and technical expertise.',
        website: 'https://www.pirelli.com',
        logo: 'assets/sponsors/pirelli.png'
    },
    'prysmian': {
        name: 'Prysmian',
        bio: 'Prysmian Group is a world leader in the energy and telecom cable systems industry. They provide advanced cable solutions for power transmission and telecommunications. Their support helps us understand industrial applications of engineering.',
        website: 'https://www.prysmiangroup.com',
        logo: 'assets/sponsors/prysmian.png'
    },
    'delta': {
        name: 'Delta Aluminium',
        bio: 'Delta Aluminium specializes in aluminum processing and manufacturing. They provide high-quality aluminum solutions for various industries. Their partnership helps us access premium materials for our robot construction.',
        website: 'https://www.deltaaluminium.eu/ro/acasa/',
        logo: 'assets/sponsors/delta.png'
    },
    'cnrg': {
        name: 'National College "Radu Greceanu"',
        bio: 'Our educational institution that provides the foundation for our robotics program. CNRG supports STEM education and provides facilities and resources for our team to develop and practice.',
        website: 'https://cnrg.ro/',
        logo: 'assets/sponsors/cnrg.png'
    },
    'alro': {
        name: 'ALRO S.A.',
        bio: 'ALRO is one of the largest aluminum producers in Europe, with operations in primary aluminum, processed aluminum, and alumina. Their industrial expertise and materials support help us build robust and lightweight robot components.',
        website: 'https://www.alro.ro',
        logo: 'assets/sponsors/alro.png'
    },
    'vimetco': {
        name: 'Vimetco Extrusion',
        bio: 'Vimetco Extrusion is part of the Vimetco Group, specializing in aluminum extrusion processes. They provide technical knowledge about manufacturing processes and materials that enhance our understanding of industrial engineering.',
        website: 'https://vimetcoextrusion.com/',
        logo: 'assets/sponsors/vimetco.png'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('sponsorModalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalLogo = document.getElementById('modalSponsorLogo');
    const modalName = document.getElementById('modalSponsorName');
    const modalBio = document.getElementById('modalSponsorBio');
    const modalLink = document.getElementById('modalSponsorLink');
    document.querySelectorAll('.sponsor-logo, .sponsor-logo-smaller').forEach(logo => {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            const src = this.src;
            const sponsorKey = getSponsorKeyFromSrc(src);

            if (sponsorData[sponsorKey]) {
                openSponsorModal(sponsorData[sponsorKey]);
            }
        });
    });
    modalClose.addEventListener('click', closeSponsorModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeSponsorModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeSponsorModal();
        }
    });

    function getSponsorKeyFromSrc(src) {
        const fileName = src.split('/').pop().split('.')[0];
        return fileName;
    }

    function openSponsorModal(sponsor) {
        modalLogo.src = sponsor.logo;
        modalLogo.alt = sponsor.name;
        modalName.textContent = sponsor.name;
        modalBio.textContent = sponsor.bio;

        if (sponsor.website && sponsor.website !== '#') {
            modalLink.href = sponsor.website;
            modalLink.style.display = 'inline-block';
        } else {
            modalLink.style.display = 'none';
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSponsorModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});
