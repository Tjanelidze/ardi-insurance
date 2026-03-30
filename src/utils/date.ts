export function getPolicyDates(): { start: string; end: string } {
  const start = new Date();
  const end = new Date(start);
  end.setFullYear(end.getFullYear() + 1);

  return {
    start: start.toLocaleDateString("ka-GE"),
    end: end.toLocaleDateString("ka-GE"),
  };
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ka-GE");
}
