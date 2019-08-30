import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
 import '../assets/sass/resume.scss';

class NoLightGallery extends PureComponent {
  renderNoLightGallery() {
    let noClickStyle = {};
    const { images } = this.props;

    if (!images) return;

    const NoLightGallery = images.map((obj, i) => {
      if (obj.link.length === 0) {
        noClickStyle = { pointerEvents: 'none' };
      } else {
        noClickStyle = { pointerEvents: '' };
      }
      return (
        <article className="resume-section w-100 p-3   "key={i}>
          <h3 >{obj.caption}</h3>
          <div className="techbutton">{obj.description}</div>
          <p >{obj.tech}</p>
          <a
            style={noClickStyle}
            className="image fit thumb work"
            href={obj.link}
            target="_blank"
            rel="noopener noreferrer"
          >
        
            <picture >
              <source  srcSet={obj.thumbnail} type="image/webp" />
              <img
              className="w-100"
                src={obj.altThumbnail}
                alt={obj.caption}
                id={obj.id}
                style={{ marginBottom: '2em' }}
              />
              
            </picture>
          </a>
        </article>
     
      );
    });

    return <div className="row">{NoLightGallery}</div>;
  }
  render() {
    return <div>{this.renderNoLightGallery()}</div>;
  }
}

NoLightGallery.displayName = 'NoLightGallery';
NoLightGallery.propTypes = {
  images: PropTypes.array,
};

export default NoLightGallery;



