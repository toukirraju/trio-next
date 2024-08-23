import { type FC } from 'react';
import { AvatarProps } from './Avatar';
interface AvatarGroupProps {
    avatars: AvatarProps[];
    limit?: number;
    size?: AvatarProps['size'];
}
declare const AvatarGroup: FC<AvatarGroupProps>;
export default AvatarGroup;
