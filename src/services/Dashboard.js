import { Axios } from '../utils/Axios';
import { BASE_URL } from '../../config/config';

const baseurl = BASE_URL



  export const createLocation = async (body) => {
    const { data } = await Axios.post(
      `${baseurl}create-location`,
      body
    );
    return data;
  };

  export const createCustomer = async (body) => {
    const { data } = await Axios.post(
      `${baseurl}create-customer`,
      body
    );
    return data;
  };
  export const createUser = async (body) => {
    const { data } = await Axios.post(
      `${baseurl}create-user`,
      body
    );
    return data;
  };
  
  export const getAgentCustomersList = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}agent-customers-list`,
    );
    return data;
  };
  export const customersList = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}form-users-list`,
    );
    return data;
  };
  export const formCustomersList = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}form-customers-List`,
    );
    return data;
  };

  export const getLocation = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}admin-location-list`,
    );
    return data;
  };
  export const getAdminCustomersList = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}admin-customers-list`,
    );
    return data;
  };

  export const getAdminSavings = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}admin-savings-list`,
    );
    return data;
  };
  export const createSavings = async (body) => {
    const { data } = await Axios.post(
      `${baseurl}create-savings`,
      body
    );
    return data;
  };

  export const adminSavingsList = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}admin-savings-list`,
    );
    return data;
  };
  export const agentSavingsList = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}agents-savings-list`,
    );
    return data;
  };

  export const withdrawFunds = async (amount) => {
    const { data } = await Axios.post(
      `${baseurl}withdraw-money/1?amount=${amount}`,
    );
    return data;
  };
  export const depositFunds = async (id,amount) => {
    const { data } = await Axios.post(
      `${baseurl}deposit-money/${id}?amount=${amount}`,
    );
    return data;

  };
  export const Transactions = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}transactions-list`,
    );
    return data;
  };
  export const AdminUserList = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}form-users-list`,
    );
    return data;
  };
  export const AgentTotalDeposit = async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}agent-total-deposit`,
    );
    return data;
  };
  export const AgentTotalCustomers= async (page,pageSize) => {
    const { data } = await Axios.get(
      `${baseurl}agent-total-customers`,
    );
    return data;
  };
  export const AgentRemitance = async (body) => {
    const { data } = await Axios.post(
      `${baseurl}add-remittance`,
      body
      );
      return data;
    };
    
    export const getAgentRemitance= async (page,pageSize) => {
      const { data } = await Axios.get(
        `${baseurl}agent-remittance-list`,
      );
      return data;
    };

    export const getAdminRemitance= async (page,pageSize) => {
      const { data } = await Axios.get(
        `${baseurl}admin-remittance-list`,
      );
      return data;
    };
    export const AdminTotals = async (page,pageSize) => {
      const { data } = await Axios.get(
        `${baseurl}overall-admin-totals`,
      );
      return data;
    };

    export const AdminDaily = async (page,pageSize) => {
      const { data } = await Axios.get(
        `${baseurl}daily-admin-totals`,
      );
      return data;
    };
    export const AdminTotalRemits = async (page,pageSize) => {
      const { data } = await Axios.get(
        `${baseurl}admin-total-remittance`,
      );
      return data;
    };
    export const getCurrentUser = async (name) => {
      const { data } = await Axios.get(
        `${baseurl}user-profile/${name}`,
      );
      return data;
    };
