interface IViewParams {
    templates?: string[]
};

export class Dashboard {
    private static _instance: Dashboard;
    private _viewParams: IViewParams;

    private constructor(viewParams: IViewParams) {
        this._viewParams = viewParams
    }

    public static GetInstance(viewParams: IViewParams) {
        if (!this._instance) this._instance = new Dashboard(viewParams);

        return this._instance;
    }

    public init() {
        console.log("worked");
    }
}