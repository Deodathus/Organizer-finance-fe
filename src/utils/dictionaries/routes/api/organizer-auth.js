import Environment from "../../config/Environment";

export default function () {
    let host;

    switch (process.env.REACT_APP_ENV) {
        default:
        case Environment.DEV:
            host = 'http://127.0.0.1:8000/'
            break;
        case Environment.PROD:
            host = 'https://api.auth.lil-develo.com/'
            break;
    }

    return {
        signin: host + 'user/login',
        signup: host + 'user',
        fetchProjects: host + 'project'
    };
}