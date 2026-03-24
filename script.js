const profilesElem = document.getElementById('profiles');

const profiles = [
    { id: 1, name: 'Carlos', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80' },
    { id: 2, name: 'Ana', image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=300&q=80' },
    { id: 3, name: 'Júlia', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80' },
    { id: 4, name: 'Família', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' }
];

let selectedId = null;

function renderProfiles() {
    profilesElem.innerHTML = profiles.map(profile => {
        return `
            <article class="profile-card ${profile.id === selectedId ? 'active' : ''}" data-id="${profile.id}">
                <div class="profile-picture" style="background-image:url('${profile.image}')"></div>
                <div class="profile-name">${profile.name}</div>
            </article>
        `;
    }).join('');

    document.querySelectorAll('.profile-card').forEach(item => {
        item.addEventListener('click', () => {
            selectedId = Number(item.dataset.id);
            renderProfiles();
            setSelectedText();
        });
    });
}

function setSelectedText() {
    let selected = profiles.find(p => p.id === selectedId);
    let existing = document.getElementById('selectedProfile');
    if (!existing) {
        existing = document.createElement('div');
        existing.id = 'selectedProfile';
        document.querySelector('main').appendChild(existing);
    }
    existing.textContent = selected ? `Perfil selecionado: ${selected.name}` : '';
}

renderProfiles();
