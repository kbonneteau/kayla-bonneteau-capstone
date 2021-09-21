import './OpponentCardsModal.scss';
import { useState } from 'react';
import OpponentIcon from '../OpponentIcon/OpponentIcon';
import ModalIcon from '../ModalIcon/ModalIcon';

// Dummy data.  Fed in by props in the future.
const cards = [
    {icon: 'https://via.placeholder.com/50x50', count: 3},
    {icon: 'https://via.placeholder.com/50x50', count: 0},
    {icon: 'https://via.placeholder.com/50x50', count: 1},
    {icon: 'https://via.placeholder.com/50x50', count: 2},
    {icon: 'https://via.placeholder.com/50x50', count: 0},
    {icon: 'https://via.placeholder.com/50x50', count: 0},
    {icon: 'https://via.placeholder.com/50x50', count: 1},
    {icon: 'https://via.placeholder.com/50x50', count: 0},
]

const OpponentCardsModal = ({ id }) => {
    const [ hidden, setHidden ] = useState(true);
    // hidden state toggled when hovering mouse over icon
    const handleMouseOver = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    return (
        <div className="played-modal">
            <div className={hidden ? 'played-modal__hidden' : 'played-modal__visible'}>
                <h3 className="played-modal__player-name">Player {id}</h3>
                <ul className="played-modal__played-list">
                    {cards.map((card, i) => (
                        <li key={i} className="played-modal__played-item">
                            <ModalIcon image={card.icon} count={card.count} />
                        </li>
                    ))}
                </ul>
            </div>
            <OpponentIcon id={id} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} />
        </div>
    );
}

export default OpponentCardsModal;