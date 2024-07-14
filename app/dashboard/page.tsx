import PageLayout from '@/components/PageLayout';
import Dashboard from '@/components/Dashboard';

export default function DashboardPage() {
    return (
        <PageLayout breadcrumb={[]}>
            <Dashboard />
        </PageLayout>
    )
}