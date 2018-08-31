import React from 'react';
import Document from 'components/Document';
import { PhotoSwipeGallery } from 'react-photoswipe';

class GalleryPage extends React.Component {
  state = {
    isOpen: false,
    items: [
      {
        src:
          'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=900',
        thumbnail:
          'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=90',
        w: 1200,
        h: 900,
        title: 'Image 1'
      },
      {
        src: 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900',
        thumbnail:
          'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=90',
        w: 1200,
        h: 900,
        title: 'Image 2'
      }
    ],
    options: {
      closeOnScroll: false
    }
  };

  getThumbnailContent = item => <img src={item.thumbnail} width={120} height={90} alt="" />;

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

  render() {
    const { items, options, isOpen } = this.state;
    return (
      <Document title="Gallery | ReactPhotoswipe" className="page-gallery">
        <div>
          <div className="page-header">
            <h1>Photoswipe gallery</h1>
          </div>
          <PhotoSwipeGallery
            items={items}
            options={options}
            thumbnailContent={this.getThumbnailContent}
            isOpen={isOpen}
            onClose={this.handleClose}
          />
          <button type="button" className="btn btn-primary" onClick={this.openPhotoSwipe}>
            Open
          </button>
        </div>
      </Document>
    );
  }
}

export default GalleryPage;
