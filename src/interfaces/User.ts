export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
    company: {
      name: string;
    };
  }

export interface UserListProps {
    users: User[];
    isLoading: boolean;
    isError: boolean;
    handleToggle: (id: number) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    expandedUserId: number | null;
  }