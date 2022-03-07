import { Component } from 'react';
import { FiPlusSquare } from 'react-icons/fi';

import { Container } from './styles';
import Logo from '../../assets/logo.png';

class Header extends Component {
  render() {
    const { openModal } = this.props;

    return (
      <Container>
        <header>
          <img src={Logo} alt="MonkeyRestaurant" />
          <h2>MoneyRestaurant</h2>
          <nav>
            <div>
              <button
                type="button"
                onClick={openModal}
              >
                <div className="text">Novo Prato</div>
                <div className="icon">
                  <FiPlusSquare size={24} />
                </div>
              </button>
            </div>
          </nav>
        </header>
      </Container>
    )
  }
};

export default Header;
