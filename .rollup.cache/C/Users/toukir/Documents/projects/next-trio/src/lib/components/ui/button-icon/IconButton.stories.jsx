import React from 'react';
import IconButton from './IconButton';
// Import an icon component for demonstration
import { FiHeart, FiStar, FiThumbsUp, FiSettings, FiBell, FiCheck, FiAlertTriangle, FiX } from 'react-icons/fi';
var meta = {
    title: 'UI/IconButton',
    component: IconButton,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['solid', 'pastel', 'outlined'],
        },
        color: {
            control: 'select',
            options: ['default', 'secondary', 'muted', 'primary', 'info', 'success', 'warning', 'error'],
        },
        shape: {
            control: 'select',
            options: ['straight', 'rounded', 'smooth', 'curved', 'full'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        shadow: {
            control: 'select',
            options: ['none', 'default', 'secondary', 'muted', 'primary', 'info', 'success', 'warning', 'error'],
        },
        loading: {
            control: 'boolean',
        },
    },
};
export default meta;
var IconButtonRow = function (_a) {
    var variant = _a.variant, shape = _a.shape, shadow = _a.shadow;
    return (<div className="flex space-x-2 mb-4">
    <IconButton variant={variant} color="default" shape={shape} shadow={shadow}><FiHeart /></IconButton>
    <IconButton variant={variant} color="secondary" shape={shape} shadow={shadow}><FiStar /></IconButton>
    <IconButton variant={variant} color="muted" shape={shape} shadow={shadow}><FiThumbsUp /></IconButton>
    <IconButton variant={variant} color="primary" shape={shape} shadow={shadow}><FiSettings /></IconButton>
    <IconButton variant={variant} color="info" shape={shape} shadow={shadow}><FiBell /></IconButton>
    <IconButton variant={variant} color="success" shape={shape} shadow={shadow}><FiCheck /></IconButton>
    <IconButton variant={variant} color="warning" shape={shape} shadow={shadow}><FiAlertTriangle /></IconButton>
    <IconButton variant={variant} color="error" shape={shape} shadow={shadow}><FiX /></IconButton>
  </div>);
};
export var AllVariants = {
    render: function () { return (<div>
      <h2 className="text-lg font-bold mb-2">Solid Variant</h2>
      <IconButtonRow variant="solid" shape="smooth" shadow="none"/>

      <h2 className="text-lg font-bold mb-2">Pastel Variant</h2>

      <IconButtonRow variant="pastel" shape="smooth" shadow="none"/>

      <h2 className="text-lg font-bold mb-2">Outlined Variant</h2>
      <IconButtonRow variant="outlined" shape="smooth" shadow="none"/>

      <h2 className="text-lg font-bold mb-2">Different Shapes</h2>
      <div className="flex space-x-2 mb-4">
        <IconButton variant="solid" color="primary" shape="straight"><FiHeart /></IconButton>
        <IconButton variant="solid" color="primary" shape="rounded"><FiHeart /></IconButton>
        <IconButton variant="solid" color="primary" shape="smooth"><FiHeart /></IconButton>
        <IconButton variant="solid" color="primary" shape="curved"><FiHeart /></IconButton>
        <IconButton variant="solid" color="primary" shape="full"><FiHeart /></IconButton>
      </div>

      <h2 className="text-lg font-bold mb-2">Different Sizes</h2>
      <div className="flex space-x-2 mb-4 items-center">
        <IconButton variant="solid" color="primary" size="sm"><FiHeart /></IconButton>
        <IconButton variant="solid" color="primary" size="md"><FiHeart /></IconButton>
        <IconButton variant="solid" color="primary" size="lg"><FiHeart /></IconButton>
      </div>

      <h2 className="text-lg font-bold mb-2">With Shadow</h2>
      <IconButtonRow variant="solid" shape="smooth" shadow="default"/>

      <h2 className="text-lg font-bold mb-2">Loading State</h2>
      <div className="flex space-x-2">
        <IconButton variant="solid" color="primary" loading><FiHeart /></IconButton>
        <IconButton variant="outlined" color="secondary" loading><FiStar /></IconButton>
        <IconButton variant="pastel" color="success" loading><FiCheck /></IconButton>
      </div>
    </div>); },
};
//# sourceMappingURL=IconButton.stories.jsx.map