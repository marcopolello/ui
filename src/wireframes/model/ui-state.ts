export interface UIState {
    // The current zoom level.
    zoom: number;

    // The error toast from any loading operation.
    errorToast?: string;

    // The info toast from any loading operation.
    infoToast?: string;

    // Indicates if the info dialog is open.
    showInfoDialog: boolean;

    // Indicates if the left sidebar is open.
    showLeftSidebar: boolean;

    // Indicates if the right sidebar is open.
    showRightSidebar: boolean;

    // The selected tab on the left sidebar.
    selectedTab: string;
}

export interface UIStateInStore {
    ui: UIState;
}

export const createInitialUIState: () => UIState = () => {
    return {
        zoom: 1,
        selectedTab: 'shapes',
        showInfoDialog: false,
        showLeftSidebar: true,
        showRightSidebar: true
    };
};