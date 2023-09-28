import Environment from "../../config/Environment";

export default function () {
    let host;

    switch (process.env.REACT_APP_ENV) {
        case Environment.DEV:
            host = 'http://127.0.0.1:8000/'
    }

    return {
        signin: host + 'user/login',
        signup: host + 'user',
        fetchProjects: host + 'project'
    };
}