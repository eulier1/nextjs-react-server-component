import TodoForm from '@/components/TodoForm';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <TodoForm />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
