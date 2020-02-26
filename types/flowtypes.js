// @flow
/* eslint-disable */
export type SwipeRowPropsType = {
    setScrollEnabled?: Function,
    swipeGestureBegan?: Function,
    onRowOpen?: Function,
    onRowDidOpen?: Function,
    leftOpenValue?: number,
    rightOpenValue?: number,
    stopLeftSwipe?: number,
    stopRightSwipe?: number,
    friction?: number,
    tension?: number,
    restSpeedThreshold?: number,
    restDisplacementThreshold?: number,
    closeOnRowPress?: boolean,
    disableLeftSwipe?: boolean,
    disableRightSwipe?: boolean,
    recalculateHiddenLayout?: boolean,
    disableHiddenLayoutCalculation?: boolean,
    onRowClose?: Function,
    onRowDidClose?: Function,
    style?: ViewPropTypes.style,
    preview?: boolean,
    previewDuration?: number,
    previewRepeat?: boolean,
    previewRepeatDelay?: number,
    previewOpenValue?: number,
    directionalDistanceChangeThreshold?: number,
    swipeToOpenPercent?: number,
    swipeToOpenVelocityContribution?: number,
    swipeToClosePercent?: number,
    shouldItemUpdate?: Function,
    onSwipeValueChange?: Function,
    forceCloseToLeftThreshold?: number,
    forceCloseToRightThreshold?: number,
    onForceCloseToLeft?: Function,
    onForceCloseToRight?: Function,
    onForceCloseToLeftEnd?: Function,
    onForceCloseToRightEnd?: Function,
    useNativeDriver?: boolean,
    children: React.Node,
    item?: any,
    onRowPress?: Function,
    previewOpenDelay?: number,
    previewOpenValue?: number,
};

export type SwipeRowStateType = {
    previewRepeatInterval: number,
    timeBetweenPreviewRepeats: number,
    dimensionsSet: boolean,
    hiddenHeight: string | number,
    hiddenWidth: string | number,
};

export type SwipeListPropsType = {
    useSectionList?: boolean,
    className?: Object,
    renderItem: Function,
    renderHiddenItem: Function,
    leftOpenValue: number,
    rightOpenValue: number,
    stopLeftSwipe?: number,
    stopRightSwipe?: number,
    closeOnScroll: boolean,
    closeOnRowPress: boolean,
    closeOnRowBeginSwipe: boolean,
    closeOnRowOpen?: boolean,
    disableLeftSwipe: boolean,
    disableRightSwipe: boolean,
    recalculateHiddenLayout: boolean,
    disableHiddenLayoutCalculation: boolean,
    swipeGestureBegan?: Function,
    onRowOpen?: Function,
    onRowDidOpen?: Function,
    onRowClose?: Function,
    onRowDidClose?: Function,
    onScrollEnabled?: Function,
    swipeRowStyle?: Object,
    listViewRef?: Function,
    previewRowKey: string,
    previewFirstRow: boolean,
    previewDuration?: number,
    previewRepeat?: boolean,
    previewRepeatDelay?: number,
    previewOpenDelay: number,
    previewOpenValue: number,
    friction?: number,
    tension?: number,
    restSpeedThreshold?: number,
    restDisplacementThreshold?: number,
    directionalDistanceChangeThreshold: number,
    swipeToOpenPercent: number,
    swipeToOpenVelocityContribution: number,
    swipeToClosePercent: number,
    shouldItemUpdate?: Function,
    onSwipeValueChange?: Function,
    useNativeDriver: boolean,
    renderHiddenRow?: Function,
    keyExtractor?: any,
    scrollEnabled?: boolean,
    onScroll?: Function,
    onLayout?: Function,
    onContentSizeChange?: Function,
};
/* eslint-enable */
