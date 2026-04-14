"use client";

import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfileQuery, useUpdateProfileMutation, useDeleteProfileMutation } from "@/redux/features/profile/profileApi";
import { RootState } from "@/store/store";
import { setUser, logout } from "@/store/Slices/AuthSlice/authSlice";
import { Loader2, Camera, User, Phone, Save, X, Edit, Mail, Calendar, BadgeCheck, ShieldCheck, AlertCircle, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { ChangePasswordModal } from "./ChangePassword";

// --- Edit Profile Modal ---
interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData: any;
}

const EditProfileModal = ({ isOpen, onClose, initialData }: EditProfileModalProps) => {
    const dispatch = useDispatch();
    const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
    const [mounted, setMounted] = useState(false);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen && initialData) {
            setFormData({
                first_name: initialData.first_name || "",
                last_name: initialData.last_name || "",
                phone_number: initialData.phone_number || "",
            });
            setImagePreview(initialData.dp_image || null);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen, initialData]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                toast.error("Image size must be less than 2MB");
                return;
            }
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await updateProfile({
                ...formData,
                dp_image: imageFile
            }).unwrap();

            toast.success("Profile updated successfully!");
            if (result.profile) {
                dispatch(setUser(result.profile));
            }
            onClose();
        } catch (error: any) {
            toast.error(error.data?.message || "Failed to update profile");
        }
    };

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose} />

            <div className="relative w-full max-w-lg bg-[#0D1F3A] border border-white/10 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    <h3 className="text-white font-bold text-[18px]">Edit Profile</h3>
                    <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg text-white/50 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Avatar Selection */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative group/avatar">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/5 border-2 border-dashed border-white/10 flex items-center justify-center transition-all group-hover/avatar:border-gold/50">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <User size={40} className="text-white/20" />
                                )}
                            </div>
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-gold text-white flex items-center justify-center shadow-lg hover:bg-gold2 transition-all"
                            >
                                <Camera size={14} />
                            </button>
                            <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                        </div>
                        <p className="text-white/30 text-[11px]">Click camera icon to change photo</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-white/50 text-[10px] uppercase font-bold tracking-wider ml-1">First Name</label>
                            <input
                                type="text"
                                value={formData.first_name}
                                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-gold/50"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-white/50 text-[10px] uppercase font-bold tracking-wider ml-1">Last Name</label>
                            <input
                                type="text"
                                value={formData.last_name}
                                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-[14px] focus:outline-none focus:border-gold/50"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-white/50 text-[10px] uppercase font-bold tracking-wider ml-1">Phone Number</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={formData.phone_number}
                                onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white text-[14px] focus:outline-none focus:border-gold/50"
                                placeholder="Phone Number"
                            />
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/20" size={14} />
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 rounded-xl border border-white/10 text-white font-bold text-[13px] hover:bg-white/5 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isUpdating}
                            className="flex-1 bg-gold text-white font-bold text-[13px] px-6 py-3 rounded-xl hover:bg-gold2 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isUpdating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save size={16} />}
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
};

// --- Main Profile Component ---
export const Profile = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootState) => state.auth);
    const { data: profileData, isLoading: isProfileLoading, error } = useGetProfileQuery();
    const [deleteProfile, { isLoading: isDeleting }] = useDeleteProfileMutation();
    console.log(profileData);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

    // Fallback to user from Redux if profile fetch fails
    const profile = profileData?.profile || user;
    const fullName = profile?.first_name ? `${profile.first_name} ${profile.last_name || ''}` : (user?.name || "Member");

    const handleDeleteAccount = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this! Your account will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f06070",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            background: "#0D1F3A",
            color: "#fff",
        });

        if (result.isConfirmed) {
            try {
                await deleteProfile().unwrap();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your account has been deleted.",
                    icon: "success",
                    background: "#0D1F3A",
                    color: "#fff",
                });
                dispatch(logout());
                router.push("/login");
            } catch (error: any) {
                toast.error(error.data?.message || "Failed to delete account");
            }
        }
    };

    if (isProfileLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Loader2 className="w-8 h-8 animate-spin text-gold" />
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto pb-10">
            {Boolean(error) && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-start gap-4 animate-in slide-in-from-top-2">
                    <AlertCircle className="text-red-400 mt-0.5" size={18} />
                    <div>
                        <p className="text-red-400 text-[13px] font-bold">Failed to sync profile data from server.</p>
                        <p className="text-red-400/60 text-[11px]">You are seeing cached/local data. There might be an issue with your connection or authentication token.</p>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-[20px] font-bold text-white tracking-wide">My Profile</h2>
                    <p className="text-white/40 text-[12px]">Manage your personal Information and settings.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleDeleteAccount}
                        disabled={isDeleting}
                        className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 hover:bg-red-500/20 transition-all font-bold text-[13px] disabled:opacity-50"
                    >
                        {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 size={16} />}
                        Delete Account
                    </button>
                    <button
                        onClick={() => setIsEditModalOpen(true)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 rounded-xl text-gold hover:bg-gold/20 transition-all font-bold text-[13px]"
                    >
                        <Edit size={16} />
                        Edit Profile
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                {/* Left Side: Avatar Card */}
                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

                        <div className="w-32 h-32 rounded-3xl p-1 bg-gradient-to-tr from-gold/50 to-transparent mb-6 relative group-hover:scale-105 transition-transform duration-500">
                            <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#0D1F3A] flex items-center justify-center">
                                {profile?.dp_image ? (
                                    <img src={profile.dp_image} alt={fullName} className="w-full h-full object-cover" />
                                ) : (
                                    <User size={56} className="text-white/10" />
                                )}
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-gold text-white p-2 rounded-xl shadow-lg border border-[#0D1F3A]">
                                <BadgeCheck size={16} />
                            </div>
                        </div>

                        <h3 className="text-white font-bold text-[18px] mb-1">{fullName}</h3>
                        <p className="text-gold text-[12px] font-bold mb-4 flex items-center gap-2">
                            <ShieldCheck size={14} />
                            IKON Practitioner
                        </p>

                        <div className="w-full pt-4 border-t border-white/5 flex flex-col gap-2">
                            <div className="flex items-center justify-between text-[11px]">
                                <span className="text-white/30 uppercase font-mono">Member ID</span>
                                <span className="text-white/70 font-bold">#IKON-{profile?.id || '000'}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Info Groups */}
                <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                        <div className="px-8 py-5 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                            <h4 className="text-white font-bold text-[14px]">Personal Information</h4>
                        </div>

                        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <InfoItem label="First Name" value={profile?.first_name || "---"} icon={<User size={14} />} />
                            <InfoItem label="Last Name" value={profile?.last_name || "---"} icon={<User size={14} />} />
                            <InfoItem label="Email Address" value={user?.email || "---"} icon={<Mail size={14} />} fullWidth />
                            <InfoItem label="Phone Number" value={profile?.phone_number || "---"} icon={<Phone size={14} />} />
                            <InfoItem label="Joined Date" value={profile?.create_at ? new Date(profile.create_at).toLocaleDateString() : "---"} icon={<Calendar size={14} />} />
                        </div>
                    </div>

                    {/* Account Security Info (Placeholder/Static) */}
                    <div
                        onClick={() => setIsChangePasswordModalOpen(true)}
                        className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center justify-between group hover:border-gold/30 transition-all cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-[13px]">Account Security</h5>
                                <p className="text-white/30 text-[11px]">Last password change was recently.</p>
                            </div>
                        </div>
                        <Edit size={16} className="text-white/20 group-hover:text-white transition-all" />
                    </div>
                </div>
            </div>

            {isEditModalOpen && (
                <EditProfileModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    initialData={profile}
                />
            )}

            {isChangePasswordModalOpen && (
                <ChangePasswordModal
                    isOpen={isChangePasswordModalOpen}
                    onClose={() => setIsChangePasswordModalOpen(false)}
                />
            )}
        </div>
    );
};

const InfoItem = ({ label, value, icon, fullWidth = false }: { label: string; value: string; icon?: React.ReactNode, fullWidth?: boolean }) => (
    <div className={`space-y-1.5 ${fullWidth ? 'sm:col-span-2' : ''}`}>
        <p className="text-white/30 text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-2">
            {icon}
            {label}
        </p>
        <p className="text-white/90 text-[14px] font-bold tracking-wide pl-5">{value}</p>
    </div>
);
