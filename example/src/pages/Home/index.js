import React from 'react';
import Document from 'components/Document';
import { PhotoSwipe } from 'react-photoswipe';

class HomePage extends React.Component {
  state = {
    isOpen: false,
    items: [
      {
        src:
          'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=900',
        w: 1200,
        h: 900,
        title: 'Image 1'
      },
      {
        src: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900',
        w: 1200,
        h: 900,
        title: 'Image 2'
      }
    ],
    options: {
      closeOnScroll: false
    }
  };

  openPhotoSwipe = e => {
    e.preventDefault();
    this.setState({
      isOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleBeforeChange = (instance, change) => {
    console.log('Before change: ', change);
  };

  render() {
    const { isOpen, items, options } = this.state;
    return (
      <Document title="Home | ReactPhotoswipe" className="page-home">
        <div>
          <div className="page-header">
            <h1>Photoswipe</h1>
          </div>
          <button className="btn btn-primary" onClick={this.openPhotoSwipe}>
            Open photoswipe
          </button>
          <PhotoSwipe
            id="my-photoswipe"
            isOpen={isOpen}
            items={items}
            options={options}
            beforeChange={this.handleBeforeChange}
            onClose={this.handleClose}
          />
        </div>
      </Document>
    );
  }
}

export default HomePage;
