import React from 'react';
import { Trash } from '../../../base/icons/svg';
/**
 * Button for showing the hangup menu.
 *
 * @returns {JSX.Element} - The hangup menu button.
 */
const SendButton = (): JSX.Element => {
    const dispatch = useDispatch();

    const onSelect = useCallback(() => {
        dispatch("Native String Content");
    }, [ dispatch ]);

    return (
        <IconButton
            accessibilityLabel = 'toolbar.accessibilityLabel.Trash'
            onPress = { onSelect }
            src = { Trash }
            type = { BUTTON_TYPES.PRIMARY } />
    );
};

export default SendButton;

